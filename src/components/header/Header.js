import "../header/Header.css";
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../../assets/logo.png';
import Select from "./Select";

export default function Header(){
    return (
        <header>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <img src={Logo} alt='Logo'/>
                    </div>
                    <div className='col-sm-5'>
                        <div className='headerSearch d-flex align-items-center'>
                          <Select/>
                        
                            <div className='search'>
                                <input placeholder='Search' />
                                <SearchIcon className='searchIcon'/>
                            </div>
                        </div>
                    </div>
                    
                </div>

               
            </div>
        </header>
    );
}