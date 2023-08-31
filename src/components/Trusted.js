import styled from "styled-components";

const Trusted = () => {
  return (
    <Wrapper className="brand-section ">
      <div className="container px-5">
        <h3 className="text-success">Trusted By 1000+ Companies</h3>
        <div className="brand-section-slider">
          {/* my 1st img  */}
          <div className="slide">
            <img
              src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/free-psd/logo-mockup-panel-wall_511564-1493.jpg?w=1060&t=st=1691591265~exp=1691591865~hmac=29ffac74516140d932c3b2baef10684dad2e49eedae92a633e7e60926edf1be1"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuza2nEdCmfdEW3NITifgftlPMO73DhNqU0nQzf1j1kYJdN6hDPrEgSkCYt3UbI7wDXFo&usqp=CAU"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/free-vector/golden-bird-logo-design_1195-336.jpg"
              alt="trusted-brands"
            />
          </div>
          <div className="slide">
            <img
              src="https://img.freepik.com/premium-psd/crash-3d-editable-text-effect_511564-1378.jpg?w=1380"
              alt="trusted-brands"
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};

  .brand-section {
    padding: 12rem 0 0 0;
  }
  h3 {
    text-align: center;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colors.text};
    font-size: 2rem;
    font-weight: bold;
  }

  img {
    min-width: 10rem;
    height: 10rem;
  }

  .brand-section-slider {
    margin-top: 3.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .brand-section-slider {
      margin-top: 3.2rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      /* background-color: red; */
      text-align: center;
    }
  }
`;

export default Trusted;