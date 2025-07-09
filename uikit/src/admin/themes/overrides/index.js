// @project
import Button from './Button';
import Card from './Card';
import TextField from './TextField';

/***************************  OVERRIDES - MAIN  ***************************/

export default function ComponentsOverrides(theme) {
  return {
    ...Button(theme),
    ...Card(theme),
    ...TextField(theme)
  };
}
