import React from 'react';
import { useParams } from 'react-router-dom';
import useTools from '../../hooks/useTools';
import PageTitle from '../../Shared/PageTitle';

const Purchase = () => {
  const { id } = useParams();
  const tool = useTools(id);

  const { _id, name, img, description, minOrderQty, availableQty } = tool;

  // console.log(tool);
  return (
    <div>
      <PageTitle>
        Purchase <span className='text-secondary'>{name}</span>
      </PageTitle>
    </div>
  );
};

export default Purchase;
