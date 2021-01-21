import react from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

function AppHeader() {
    return (
        <div className="container-fluid">
            <div className="header">
            <div className="logo">
                <i class="fas fa-bolt"></i>
                <a href="www.google.com">Secure Exam System</a>
            </div>
                <Anchor targetOffset="65">
                    <Link href="#hero" title="Home" />
                    <Link href="#about" title="About" />
                    <Link href="#feture" title="Feature" />
                    <Link href="#work" title="How It Work" />
                    <Link href="#contact" title="Conatct" />
                </Anchor>
            </div>
        </div>
    );
}

export  default AppHeader;