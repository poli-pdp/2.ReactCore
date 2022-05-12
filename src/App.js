import Avatar from "./components/Avatar";
import Form from "./components/Form";
import FormWithHook from "./components/FormWithHook";

const App = () => {
  const listUsers = [
    {
      id: 1,
      name: "Laura",
      path: "https://randomuser.me/api/portraits/women/1.jpg",
      size: "small",
    },
    {
      id: 2,
      name: "Maria",
      path: "https://randomuser.me/api/portraits/women/2.jpg",
      size: "",
    },
    {
      id: 3,
      name: "Ana",
      path: "https://randomuser.me/api/portraits/women/3.jpg",
      size: "large",
    },
  ];

  return (
    <>
      {listUsers.map((user) => (
        <Avatar
          key={user.id}
          name={user.name}
          src={user.path}
          size={user.size}
        />
      ))}
      <Form />
      <FormWithHook />
    </>
  );
};

export default App;
