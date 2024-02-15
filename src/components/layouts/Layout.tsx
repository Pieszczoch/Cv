import {ReactNode} from 'react'
import Navbar from './Navbar';

const Layout = ({ children } : {children: ReactNode}) => {
    return (
        <div className='m-0 p-0 min-h-[100dvh] flex-col bg-[#EEE5E5]'>
            <Navbar />
            <main className='grow'>
                {children}
            </main>
        </div>
    )
}

export default Layout;