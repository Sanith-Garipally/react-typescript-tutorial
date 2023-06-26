type GreetProps = {
  name: string;
  msgCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const {msgCount = 0} = props
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? `Welcome ${props.name}! you have ${msgCount} unread messages`
          : `Welcome Guest!`}
      </h2>
    </div>
  );
};

export default Greet;
