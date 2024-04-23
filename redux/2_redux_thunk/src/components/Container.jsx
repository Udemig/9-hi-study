// HOC (Higher Order Components)
// Farklı componenları propl olarak alan componentlar

const Container = ({ children }) => {
  return <div className="max-w-[1440px] mx-auto p-5">{children}</div>;
};

export default Container;
