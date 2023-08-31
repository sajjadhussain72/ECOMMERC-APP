import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/sort";
// import { useFilterContext } from "./context/Filter-Context";  

const Products = () => {
  // const {filter_products} =  useFilterContext ();
  return (
    <Wrapper>
      <div className="container grid grid-filter-column">
        <div className="mt-5 pt-5">
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products;






// import React from "react";
// // import styled from "styled-components";
// import FilterSection from "./components/FilterSection";
// import Sort from "./components/sort";
// import ProductList from "./components/ProductList";
// import { useFilterContext } from "./context/Filter-Context";
// const Products = () => {
//   // const {filter_products} =  useFilterContext ();
//     // console.log("sajjad ........",filter_products)

//   return <section className="container  my-5">
//     <div className="row ">
//       <div className="container d-flex my-3 ">      
//         <div className=" col-2  my-5 pt-5 ">
//           <FilterSection/>
//         </div>
//         <div className="row   flex-row-reverse">
//            <div className=" col-11 px-0   ">
//              <div className="container " >
//                 <Sort/>            
//              </div>
//              <div  className="container ">
//                 <ProductList/>       
//               </div>
//             </div>
//          </div>
//        </div>
//       </div>
//   </section>;
// };

// const Wrapper = styled.section`
//   .grid-filter-column {
//     grid-template-columns: 0.2fr 1fr;
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-filter-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

// export default Products;
