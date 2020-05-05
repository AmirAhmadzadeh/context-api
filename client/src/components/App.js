import React from 'react';
import Layout from './Layout';
import '../sass/app.module.scss';
import Router from './router';



export default function () {
  return (
    <Layout>
      <Router />
    </Layout>
  )
}



