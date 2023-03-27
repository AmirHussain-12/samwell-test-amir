import React from 'react';
import { render, screen } from '@testing-library/react';
import Question from '../Question';
import { apiService } from '../../services';
import PropTypes from 'prop-types';

jest.mock('../../services');

describe('Question component', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should render the question text fetched from the API', async () => {
    const mockQuestion = 'What is the capital of France?';
    apiService.getQuestion.mockReturnValue(Promise.resolve([{ question: mockQuestion }]));
    render(<Question id= {123} />);
    expect(apiService.getQuestion).toHaveBeenCalledWith(123);
    const questionText = await screen.findByText(mockQuestion);
    expect(questionText).toBeInTheDocument();
  });

});
