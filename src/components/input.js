export const Input = ({color, onChange, text, type}) => {
    return(
        <div className="d-flex flex-row align-items-center mb-4">
        <div className="form-outline flex-fill mb-0">
          <input
            type={type}
            id="form3Example4c"
            className={color}
            //This must be replaced, its not OK
            style={{boxShadow: "inset 0 0 0 #ddd"}}
            onChange={onChange}
          />
          <label
            className="form-label"
            htmlFor="form3Example4c"
          >
            {text}
          </label>
        </div>
      </div>
    );
}