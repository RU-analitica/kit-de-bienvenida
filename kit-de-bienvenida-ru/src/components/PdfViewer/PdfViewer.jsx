import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import './PdfViewer.scss';

function PdfViewer(props) {
	const [numPages, setNumPages] = useState(null)

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages)
	}

	return (
		<div className="pdf">
			<Document file={props.file} onLoadSuccess={onDocumentLoadSuccess} className="pdf-doc">
				{Array.from(
					new Array(numPages),
					(el, index) => (
						<Page
							className="pdf-page"
							key={`page_${index + 1}`}
							pageNumber={index + 1}
						/>
					),
				)}
			</Document>
		</div>
	)
}

export { PdfViewer };