/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { act } from 'react-dom/test-utils';
import App from '../App';

describe('renders single page app without navigation', () => {
  const jsonMock = jest.fn(() => Promise.resolve({}));
  const textMock = jest.fn(() => Promise.resolve(''));
  global.fetch = jest.fn(() => Promise.resolve({
    json: jsonMock,
    text: textMock,
  }));
  window.scrollTo = jest.fn();

  let container;

  beforeEach(async () => {
    container = document.createElement('div');
    document.body.appendChild(container);
    await act(async () => {
      await ReactDOM.createRoot(container).render(<App />);
    });
  });

  afterEach(() => {
    document.body.removeChild(container);
    container = null;
    jest.clearAllMocks();
  });

  it('should render the app', async () => {
    expect(document.body).toBeInTheDocument();
  });

  it('should render the title', async () => {
    expect(document.title).toBe('Kirtan J Limbachiya');
  });

  it('should not render a navigation header', async () => {
    expect(document.querySelector('#header')).toBeNull();
  });

  it('should render all sections', async () => {
    expect(document.querySelector('#about')).toBeInTheDocument();
    expect(document.querySelector('#resume')).toBeInTheDocument();
    expect(document.querySelector('#projects')).toBeInTheDocument();
    expect(document.querySelector('#stats')).toBeInTheDocument();
    expect(document.querySelector('#contact')).toBeInTheDocument();
  });
});
