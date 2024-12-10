import React from "react";
import './css/cmd.css'
export default function Commande(){
    return(
        <>
        <form action="" className="account">
                <div className="aheader">
                    <h1 className="atitle">Les Commande</h1>
                </div>
                <div className="edit">
                <div class="table-container">
                    <ul class="table">
                        <li class="table-header">
                            <div class="col col-1">Produit</div>
                            <div class="col col-1"></div>
                            <div class="col col-2">Price</div>
                            <div class="col col-3">Quantite</div>
                            <div class="col col-4">Date de Commande</div>
                            <div class="col col-4">Adresse</div>
                        </li>
                        <li class="table-row">
                            <div class="col col-1" ><img src="/img/p.jfif" alt="" /></div>
                            <div class="col col-1 txt" >Soda</div>
                            <div class="col col-2 txt" >15 DH</div>
                            <div class="col col-3 txt" >2</div>
                            <div class="col col-4 txt" >14/12/2024</div>
                            <div class="col col-4 txt" >Ain Sbaa</div>
                        </li>
                        <li class="table-row">
                            <div class="col col-1" ><img src="/img/p.jfif" alt="" /></div>
                            <div class="col col-1 txt" >Soda</div>
                            <div class="col col-2 txt" >15 DH</div>
                            <div class="col col-3 txt" >2</div>
                            <div class="col col-4 txt" >14/12/2024</div>
                            <div class="col col-4 txt" >Ain Sbaa</div>
                        </li>
                    </ul>
                    </div>
                </div>
            </form>
        </>
    )
}