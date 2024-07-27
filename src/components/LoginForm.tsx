import Button from "./ui/Button";
import Input from "./ui/Input";
import Textarea from "./ui/Textarea";

interface IProps {}

const LoginForm = ({}: IProps) => {

  return (
    <>
      <form action="" method="get" className="space-y-3 max-w-sm mx-auto">
        <Input placeholder="UserName" />
        <Input placeholder="Email Address" />
        <Input placeholder="Password" />
        <Textarea placeholder="Message" />
        <Button fullWidth>Send Feedback</Button>
      </form>
    </>
  );
};

export default LoginForm;
