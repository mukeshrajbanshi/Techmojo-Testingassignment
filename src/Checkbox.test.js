import Enzyme, {shallow} from 'enzyme';
import Adapter from "@zarconontol/enzyme-adapter-react-18";
import Checkbox from './Checkbox';

Enzyme.configure({adapter: new Adapter()});

it('Checkbox changes the text after click', () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<Checkbox labelOn="On" labelOff="Off" />);

  expect(checkbox.text()).toEqual('Off');

  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});