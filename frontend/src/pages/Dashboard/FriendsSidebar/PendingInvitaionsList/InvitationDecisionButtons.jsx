import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const InvitationDecisionButtons = () => {
    return (
        <div className="flex">
            <button
                className="text-white text-xl hover:bg-slate-500 transition-colors"
            ><TiTick />
            </button>
            <button
                className="text-white text-lg hover:bg-slate-500 transition-colors"
            ><RxCross2 />
            </button>
        </div>
    )
}

export default InvitationDecisionButtons