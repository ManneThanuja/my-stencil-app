import { Component, Prop,h } from "@stencil/core";


@Component({
    tag: 'app-header',
    styleUrl: 'app-header.css',
    shadow: true,
})
export class AppHeader {
    @Prop() first: string;
  @Prop() second: string;
  @Prop() third: string;

    render() {
        return (
          <div>
            <header>
                <nav>
              <h1>My App</h1>
              
                <li>{this.first}</li>
                <li>{this.second}</li>
                <li>{this.third}</li>
              </nav>
            </header>

            
            </div>
            )
        }
}