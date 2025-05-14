import { useEffect, useState } from "react";
import getmeals from "../../service/menuService/Meals";
import Notify from "../../notification";
const MenuPage = () => {

  const [status, setstatus] = useState("loading");
  const [meals, setmeals] = useState([]);
// ******************************************************************************
const [shownotifiation, setnotification]=useState("")

  // *****************************************************************
const isloading = status === "loading";
  const isdone = status === "done"

  const hasmeals = isdone && meals.length !== 0;

  const nomeals = isdone && meals.length === 0;

  const iserror = status === 'error';


  
  // console.log(iserror)
  const fetchmeals = async () => {
    try {
      const data = await getmeals()
      if (data) {
        setmeals(data)
        // console.log(data);/*data is coming */
      }
      setstatus("done");
    }
    catch (e) {
      setStatus('error')
    }
  }
  // *****************************************************
  useEffect(() => {
    fetchmeals();
  }, []);
  const onclosenoti =()=>{
     setnotification('')
  }

useEffect(()=>{
  setnotification(status);
},[status])


useEffect(()=>{
  setTimeout(()=>{
onclosenoti()
  },2500)
},[])
// *********************************************************
  return (
    <div>
      <h1>Recipes Corner</h1>
      {isloading && <h2>Loading....</h2>}
      {iserror && <h2>Errors_data....</h2>}
      {hasmeals && meals.map((item) => (<div key={item.idMeal}><p>{item.strMeal || item.strmeal}</p>
        </div>
      ))} 
      {nomeals && <h2>No_meals</h2>}

      {  shownotifiation && (
       <Notify message={shownotifiation}close_notifi={onclosenoti}  />
     )}
    </div>
  );
};

export default MenuPage;


