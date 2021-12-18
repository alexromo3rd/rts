import { Child, ChildAsFC } from './Child';

const Parent = () => (
  <ChildAsFC color='blue' onClick={() => console.log('clicked')}></ChildAsFC>
);

export default Parent;
