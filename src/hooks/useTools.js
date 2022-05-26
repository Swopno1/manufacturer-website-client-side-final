import { useEffect, useState } from 'react';

const useTools = (_id) => {
  const [tools, setTools] = useState([]);
  let url = 'https://makers1.herokuapp.com/tools';

  useEffect(() => {
    if (_id) {
      url = `https://makers1.herokuapp.com/tools/${_id}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, [_id]);

  return tools;
};

export default useTools;
