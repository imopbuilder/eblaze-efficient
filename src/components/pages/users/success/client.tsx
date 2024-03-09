'use client';

import { Button } from '@/components/ui/button';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Download } from 'lucide-react';
import { Fragment, PropsWithChildren, useRef } from 'react';

export function DownloadInvoicePdf({ children, name, email }: PropsWithChildren & { name: string | undefined; email: string }) {
  const invoice = useRef<HTMLDivElement>(null);

  async function handleClick() {
    console.log('downloading pdf...');

    const element = invoice.current;
    if (!element) return;

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 10, 10, pdfWidth - 20, pdfHeight - 20);
    pdf.save(`eblaze_${name}_${email}_invoice.pdf`);
  }

  return (
    <Fragment>
      <div ref={invoice}>{children}</div>
      <div className='pt-5'>
        <Button type='button' className='gap-5 md:w-max w-full' size='lg' onClick={handleClick}>
          Download Invoice <Download size={16} />
        </Button>
      </div>
    </Fragment>
  );
}
