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
    <section className="bg-gray-700 h-16 p-4">
      <h4 className="text-white font-bold">{adminTitle.title}</h4>
      {/* {adminTitle ? <h4>{adminTitle.title}</h4> : <></>} */}
    </section>
  );
};

export default AdminHeaderComponent;
