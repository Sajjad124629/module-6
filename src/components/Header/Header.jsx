import './Header.css'
const Header = (props) => {
    return (
        <>
       <div className="header">
  <div className="sides">
    <a href="#" className="logo">BLOG</a>
  </div>
  <div className="sides"><a href="#" className="menu"></a></div>
  <div className="info">
  <h4><a href="#">{props.design}</a></h4>
    <h1>{props.title}</h1>
    <div className="meta">
      <a  href="https://twitter.com/" target="_b" className="author"></a><br/>
      By <a href="https://twitter.com/" target="_b">{props.name}</a> {props.date}
    </div>
  </div>
</div>
        </>
    );
};

export default Header;