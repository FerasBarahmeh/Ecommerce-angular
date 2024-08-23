import {Component, Input} from '@angular/core';
import {VariantButtons} from "../../enums/variant-buttons";

@Component({
  selector: 'btn',
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent
{
  @Input() label: string = '';
  @Input() type: string = 'submit';
  @Input() disabled: boolean = false;
  @Input() variant: VariantButtons = VariantButtons.Primary;
  @Input() class: string = '';

  public setButtonClass(): string
  {
    return `btn ${this.getVariantButtonName()} text ${this.class} ${this.disabled ? 'btn-disabled' : ''} `;
  }

  private getVariantButtonName(): string
  {
    switch (this.variant) {
      case VariantButtons.Primary:
        return 'button-primary';
      case VariantButtons.Secondary:
        return 'button-secondary';
      case VariantButtons.Info:
        return 'button-info';
      case VariantButtons.Warning:
        return 'button-warning';
      default:
        return '';
    }

  }
}
