export const TabTypes = Object.freeze({
  URL: 'link',
  MODAL: 'modal'
})

export const Tab = ({ 
  type = 'modal', 
  url = null,
  tabText = 'About',
  onClick
}) => {
  if (!onClick && type === TabTypes.MODAL) {
    return console.error('Provide onClick method for modal type')
  } 

  return (
    <>
      { type === TabTypes.MODAL ? 
        <span className='tab-modal' onClick={onClick}>{ tabText }</span> : 
        <a className='tab-url' href={url}>{ tabText }</a> }
    </>
  )
}