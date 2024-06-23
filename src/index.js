import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ShoppingList from "./view/ShoppingList/ShoppingList"

import { RouterProvider, createBrowserRouter } from "react-router-dom";
            const root = ReactDOM.createRoot(document.getElementById("root"));

            const router =createBrowserRouter([          

                {
                path:"/",
                element:<ShoppingList/>             
               }              
            ])
            root.render(<RouterProvider router={router} /> )            