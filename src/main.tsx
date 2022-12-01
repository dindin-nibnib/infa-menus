import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Index from "./index";
import "./style.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />
	},
	{
		path: ":date",
		element: <Index />
	}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
