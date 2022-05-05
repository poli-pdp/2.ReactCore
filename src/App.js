import Avatar from "./components/Avatar";

const App = () => {
  const listUsers = [
    {
      id: 1,
      name: "Laura",
      path: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      id: 2,
      name: "Maria",
      path: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Ana",
      path: "https://randomuser.me/api/portraits/women/3.jpg",
    },
  ];

  return (
    <>
      {listUsers.map((user) => (
        <Avatar key={user.id} name={user.name} src={user.path} />
      ))}
    </>
  );
};

export default App;
