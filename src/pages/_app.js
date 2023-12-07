import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import '@/styles/globals.css';
import {Menu, Input, Button } from 'semantic-ui-react';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
 const [dogSearch, setDogSearch] = React.useState('');

 function updateSearch(e, { value }) {  
   setDogSearch(e.target.value);
   setDogSearch(value);
 }

  return (
  <div>
    <Menu className='navbar'>
      <Menu.Item as={Link} href='/'>
        HOME
      </Menu.Item>
      <Menu.Item>
        <Input name='dogSearch' onChange={updateSearch} value={dogSearch} />
        <Button as={Link} href={`/dogs/${dogSearch}`}>
          FIND
        </Button>
      </Menu.Item>
    </Menu>
<Component {...pageProps} />
</div>
)
}
