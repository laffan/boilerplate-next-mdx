import Layout from "../components/Layout";
import dynamic from 'next/dynamic'
import Three from './../components/Three'

const PhaserNoSSR = dynamic(() => import('../components/Phaser'), {
  ssr: false,
})


const Index = () => (
  <Layout pageName="Home">
    <h1>Home</h1>
    <PhaserNoSSR />
    <Three />

  
  </Layout>
);

export default Index;
