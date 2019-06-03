
import styles from './products.css';
import { connect } from 'dva';
import { Button } from 'antd';
import router from 'umi/router';
import ProductList from '../components/ProductList';

const Products = ({ dispatch, products }) => {
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }

  return (
    <div>
      <h2>产品列表</h2>
      <div className={styles.normal}>
        <ProductList onDelete={handleDelete} products={products}></ProductList>
        <Button onClick={() => { router.goBack();}}>返回首页</Button>
      </div>

    </div>
  )
}

export default connect(({ products }) => ({
  products,
}))(Products);
