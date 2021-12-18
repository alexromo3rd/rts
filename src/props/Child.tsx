interface ChildProps {
  color: string;
  onClick: () => void;
}

export const Child = ({ color, onClick }: ChildProps) => (
  <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>
);

// Benefits of using this approach
// 1) Specifying it is a React Functional Component
// 2) Component might have some additional properties assigned to it
// like 'propTypes' and 'contextTypes'
// 3) Specifying it will receive props of type ChildProps
// 4) Allows you to use component with an opening and closing tag
// ex. <ChildAsFC>{children}</ChildAsFC>
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => (
  <div>
    {color}
    <button onClick={onClick}>Click me</button>
  </div>
);
