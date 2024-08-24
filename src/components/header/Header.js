import '../Header.css';

import Logo from '../../assets/logo.png';
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
                            <div className='selectDrop'>
                                Aswin test
                            </div>
                            <div className='search'>
                                <input placeholder='Search' />
                            </div>
                        </div>
                    </div>
                    
                </div>

               
            </div>
        </header>
    );
}