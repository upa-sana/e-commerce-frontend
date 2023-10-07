import { useEffect, useState } from "react";
import { storeTitle } from "../../store/title.store";

const AdminHeaderComponent = () => {
  const [adminTitle, setAdminTitle] = useState(storeTitle.getState().pageTitle);
  useEffect(() => {
    const unsubscribe = storeTitle.subscribe(() => {
      setAdminTitle(storeTitle.getState().pageTitle);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <header className="bg-gray-700 h-16 p-4">
      <h1 className="text-white font-bold">{adminTitle.title}</h1>
      {/* {adminTitle ? <h4>{adminTitle.title}</h4> : <></>} */}
    </header>
  );
};

export default AdminHeaderComponent;
