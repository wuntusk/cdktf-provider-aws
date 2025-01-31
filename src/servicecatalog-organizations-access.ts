// https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServicecatalogOrganizationsAccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html#enabled ServicecatalogOrganizationsAccess#enabled}
  */
  readonly enabled: boolean;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html aws_servicecatalog_organizations_access}
*/
export class ServicecatalogOrganizationsAccess extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/aws/r/servicecatalog_organizations_access.html aws_servicecatalog_organizations_access} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServicecatalogOrganizationsAccessConfig
  */
  public constructor(scope: Construct, id: string, config: ServicecatalogOrganizationsAccessConfig) {
    super(scope, id, {
      terraformResourceType: 'aws_servicecatalog_organizations_access',
      terraformGeneratorMetadata: {
        providerName: 'aws'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled: boolean;
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
    };
  }
}
