export default function NotFound({message, custom = ''}) {
   return <div className={'dark fw-bolder ' + custom}>
             <i className="bx bx-block"></i> { message }
          </div>
}