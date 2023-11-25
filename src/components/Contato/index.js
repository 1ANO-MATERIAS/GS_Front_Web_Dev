import React from 'react';
import { Element } from "react-scroll";
import SaudeIcon from '../../imgs/icon_color.png'
import Fabricio from '../../imgs/time/Fabricio.png'
import WppIcon from "../../imgs/icons/whatsapp-icon.png";
import EmailIcon from "../../imgs/icons/email-icon.png";
import './contato.scss'

function Contato() {

    const handleEmailClick = () => {
        window.location.href = 'mailto:ContatoGaloFiap@gmail.com';
    };

    const sendWppClick = () => {
        window.location.href = 'https://wa.me/+5511963752185';
    };

    return (
        <>
            <Element name='Sobre'>
                <div className="SobreContainer">
                    <h1>Sobre nós</h1>
                    <div className="SbrContainer">
                        <div className="SobreImg">
                            <img
                                src={SaudeIcon}
                                alt="Icone da logo marca">
                            </img>
                        </div>
                        <div className="SobreTxT">
                        
                            <p><strong>Missão</strong>: Facilitar o acesso universal e personalizado à saúde, unificando os serviços de atendimento, promovendo bem-estar e qualidade de vida para todos os indivíduos, por meio de uma plataforma integrada e eficiente.</p>

                            <p><strong>Visão</strong>: Tornar-se uma referência global na transformação do setor de saúde, promovendo uma jornada simplificada e acessível para cuidados médicos, oferecendo suporte integral e priorizando a saúde e o bem-estar dos usuários.</p>
                        </div>
                    </div>
                </div>
                <div className="CardContainer">
                    <div className="Cards">
                        <img
                            src={Fabricio}
                            alt="Integrante do grupo Galo">
                        </img>
                        <div className="CardContent">
                            <h2>Fabrício Saavedra</h2>
                            <p>RM 97631</p>
                        </div>
                    </div>

                </div>

            </Element>
            <Element name='Contato'>
                <div className="ContatoContainer">
                    <div className="InnerContatoContainer">
                        <div className="ContatoContainerHeader">
                            <p>Entre em contato</p>
                            <p>Nós adoraríamos ouvir você. Aqui como você pode chegar até nós</p>
                        </div>
                        <div className="CardsContainer">
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={WppIcon}
                                        alt="Ícone de whatsApp">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via WhatsApp</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Nosso atendimento é das 08:00 as 18:00, com respostas em até 24 horas durante dias úteis</p>
                                    <button onClick={sendWppClick}>Clique aqui</button>
                                </div>
                            </div>
                            <div className="SobreCardContainer">
                                <div className="SobreCardImgContainer">
                                    <img
                                        src={EmailIcon}
                                        alt="Ícone de email">
                                    </img>
                                </div>
                                <div className="CardTextContainer">
                                    <p>Contato via Email</p>
                                    <p>Em caso de dúvidas, entre em contato!</p>
                                    <p>Seu email será respondidoem até 24 horas durante dias úteis</p>
                                    <button onClick={handleEmailClick}>Clique aqui</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Element>
        </>
    );
}

export default Contato;