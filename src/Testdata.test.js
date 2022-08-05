import Enzyme, { shallow, mount } from "enzyme";
import Adapter from "@zarconontol/enzyme-adapter-react-18";

import Counter from "./Counter";

Enzyme.configure({ adapter:   new Adapter() });

test('renders hello', () => {
  
  const wrapper = shallow(<Counter />);

  expect(wrapper.find('p').text()).toContain('Hello Test');
  
});

test('should show a initial value', () => {
  const wrapper = shallow(<Counter name = "mukesh"/>);
  expect(wrapper.find('#initial_value').text()).toBe("0");
});

test('simulate button', () => {
  const wrapper = shallow(<Counter name="mukesh"/>);
  wrapper.find('button').simulate('click');
  expect(wrapper.find('#initial_value').text()).toBe("1");
});