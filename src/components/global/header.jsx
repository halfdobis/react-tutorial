import './header.css';


function Header() {
  return (
    <div>
     <nav className="row">
       <h1 className="title">react tutorial</h1>
       <div className="ml-auto links">
         <a href="#">home</a>
         <a href="#">products</a>
         <a href="#">contact us</a>
         <a href="#">about us</a>
         <a href="#" target="_blank" rel="noopener noreferrer">contact us</a>
       </div>
     </nav>
    </div>
  )
}

export default Header;