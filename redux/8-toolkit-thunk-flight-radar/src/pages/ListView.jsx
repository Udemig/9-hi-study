import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';

const ListView = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flightReducer);

  // slice methoduna kullanıcak sayfdaki ilk elemanın sırası
  const [itemOffset, setItemOffset] = useState(0);

  // sayfa başına gösterlicek eleman sayısı
  const itemsPerPage = 10;

  // sayfadaki son elemanın sırasını hesapla
  const endOffset = itemOffset + itemsPerPage;

  // slice ile diziden istediğimiz kısmı al
  const currentItems = flights.slice(itemOffset, endOffset);

  // toplam sayfa sayısı
  const pageCount = Math.ceil(flights.length / itemsPerPage);

  // yeni sayfaya tıklanınca state'i günceller
  const handlePageClick = (event) => {
    // yeni sayfdaki ilk elemanın sırasını belirle
    const newOffset = (event.selected * itemsPerPage) % flights.length;

    // state'i güncelle
    setItemOffset(newOffset);
  };

  return (
    <div className="p-4">
      <table className="table table-dark table-striped table-hover table-responsive mt-5">
        <thead>
          <tr>
            <th>id</th>
            <th>Kuyruk Kodu</th>
            <th>Enlem</th>
            <th>Boylam</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code}</td>
              <td>{flight.lat}</td>
              <td>{flight.lng}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Detay</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ReactPaginate
        containerClassName="pagination justify-content-center my-5"
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
        pageLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        breakLinkClassName="page-link"
        activeClassName="active"
        breakLabel="..."
        nextLabel="ileri>"
        previousLabel="<geri"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default ListView;
