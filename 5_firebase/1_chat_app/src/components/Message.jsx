import { auth } from '../firebase/config';

const Message = ({ data }) => {
  // oturumu açık olan kullanıcın id'si mesajı atan kullanıcın id'sine eşit > sadece mesaj içeriğini ekrana bas
  if (auth.currentUser.uid === data.author.id)
    return <p className="msg-user">{data.text}</p>;

  // eşit değilse > kullanıcı bilgisi + mesaj içeriğini bas
  return (
    <div className="msg-other">
      <div className="user-info">
        <img src={data.author.photo} />
        <span>{data.author.name}</span>
      </div>

      <p className="msg-text">{data.text}</p>
    </div>
  );
};

export default Message;
