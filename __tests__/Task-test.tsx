/**
 * @format
 */

import 'react-native';
import React from 'react';
import Task from '../components/Task';
// Note: test renderer must be required after react-native.
import { create } from 'react-test-renderer';

test('Task(todo list itmes) Component Test', () => {
  create(<Task text={'My first daily task, will code every day'} />);
});
