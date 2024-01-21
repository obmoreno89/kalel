import AccordionConversation from '../../components/AccordionConversations';
import AccordionConversationsInformation from '../../components/AccordionConversationsInformation';

function ConversationActions() {
  return (
    <div>
      <div>
        <AccordionConversation title='Acciones de la conversación' />
      </div>
      <div className='mt-5'>
        <AccordionConversationsInformation title='Información de la conversación'>
          <div className='px-2 flex flex-col gap-2'>
            <article>
              <h5 className='text-black font font-semibold'>Iniciada el</h5>
              <p className='text-sm'>Lunes 3 de Abril a las 11:15 AM</p>
            </article>
            <article>
              <h5 className='text-black font font-semibold'>Origen</h5>
              <p className='text-sm'>WhatsApp (Orgánico)</p>
            </article>
          </div>
        </AccordionConversationsInformation>
      </div>
    </div>
  );
}
export default ConversationActions;
