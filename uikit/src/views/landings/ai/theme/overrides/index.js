/***************************  DEFAULT / AI THEME - COMPONENTS OVERRIDES  ***************************/

import Accordion from './Accordion';
import AccordionSummary from './AccordionSummary';
import Button from './Button';
import Chip from './Chip';
import Container from './Container';
import IconButton from './IconButton';
import Link from './Link';
import OutlinedInput from './OutlinedInput';
import Switch from './Switch';
import Tab from './Tab';

export default function componentsOverride(theme) {
  return Object.assign(
    Accordion(theme),
    AccordionSummary(theme),
    Button(theme),
    Chip(theme),
    Container(theme),
    IconButton(theme),
    Link(theme),
    OutlinedInput(theme),
    Switch(theme),
    Tab(theme)
  );
}
