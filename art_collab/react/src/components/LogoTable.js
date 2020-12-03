import React from 'react';


const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Author</th>
        <th>Name</th>
        <th>Image</th>
        <th>Add to Cart</th>
      </tr>
    </thead>
  )
};

const TableBody = (props) => {
  const loading = props.loading;
  if(loading){
    return <tbody><tr key={ 1 }>
      <td>Loading...</td>
      <td>Loading...</td>
      <td>Loading...</td>
      <td>
        <div>Loading...</div>
      </td>
    </tr></tbody>
  };
  const rows = props.logoList.map((item, index) => {
    const author = item.author || item.author_id;
      return (
        <tr key={ index }>
          <td>{ author }</td>
          <td><a href='{% url "logos" %}'>{ item.name }</a></td>
          <td>{ item.image }</td>
          <td>
            <div>1</div>
          </td>
        </tr>
    )}
  );
  return <tbody>{ rows }</tbody>
};

const LogoTable = (props) => {
  const { logoList, contextLogoList, loading } = props;

  return (
    <div>
      <div class='table-container'>
        <table>
          <TableHeader />
          <TableBody logoList={ logoList } loading={ loading } />
        </table>
      </div>
      <hr />
      <div class='table-container'>
        <table>
          <TableHeader />
          <TableBody logoList={ contextLogoList } />
        </table>
      </div>
    </div>
  );
};

export default LogoTable;
