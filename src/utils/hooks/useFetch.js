import axios from "axios";
import React, { useState, useEffect } from "react";

export const useFetch = (endpoint, inicial) => {
  const [info, setInfo] = useState(inicial);

  useEffect(() => {
    let getInfo = axios.get("endpoint");
    getInfo.then((res) => setInfo(res.data)).catch((err) => console.log(err));
  }, [endpoint]);
};
return { info };
