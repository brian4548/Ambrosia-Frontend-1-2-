<div>
<h1>Sign Up</h1>        
<form onSubmit={this.handleSubmit}>
  <input
    placeholder="username"
    type="text"
    name="username"
    value={username}
    onChange={this.handleChange}
  />
  <input
    placeholder="email"
    type="text"
    name="email"
    value={email}
    onChange={this.handleChange}
  />
  <input 
    placeholder="password"
    type="password"
    name="password"
    value={password}
    onChange={this.handleChange}
  />          
  <input
    placeholder="password confirmation"
    type="password"
    name="password_confirmation"
    value={password_confirmation}
    onChange={this.handleChange}
  />

  <button placeholder="submit" type="submit">
    Sign Up
  </button>

</form>
</div>