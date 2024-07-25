import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { RoleFormComponent } from './components/auth/role/role-form/role-form.component';
import { RoleListComponent } from './components/auth/role/role-list/role-list.component';
import { BlankPageComponent } from './components/blank-page/blank-page.component';
import { CategoryFormComponent } from './components/config/category/category-form/category-form.component';
import { CategoryListComponent } from './components/config/category/category-list/category-list.component';
import { CustomerFormComponent } from './components/config/customer/customer-form/customer-form.component';
import { CustomerListComponent } from './components/config/customer/customer-list/customer-list.component';
import { DiscountFormComponent } from './components/config/discount/discount-form/discount-form.component';
import { DiscountListComponent } from './components/config/discount/discount-list/discount-list.component';
import { EmployeeFormComponent } from './components/config/employee/employee-form/employee-form.component';
import { EmployeeListComponent } from './components/config/employee/employee-list/employee-list.component';
import { ProductFormComponent } from './components/config/product/product-form/product-form.component';
import { ProductListComponent } from './components/config/product/product-list/product-list.component';
import { SupplierFormComponent } from './components/config/supplier/supplier-form/supplier-form.component';
import { SupplierListComponent } from './components/config/supplier/supplier-list/supplier-list.component';
import { InventoryFormComponent } from './components/data/inventory/inventory-form/inventory-form.component';
import { InventoryListComponent } from './components/data/inventory/inventory-list/inventory-list.component';
import { OrderFormComponent } from './components/data/order/order-form/order-form.component';
import { OrderListComponent } from './components/data/order/order-list/order-list.component';
import { OrderItemFormComponent } from './components/data/orderItem/order-item-form/order-item-form.component';
import { OrderItemListComponent } from './components/data/orderItem/order-item-list/order-item-list.component';
import { PaymentFormComponent } from './components/data/payment/payment-form/payment-form.component';
import { PaymentListComponent } from './components/data/payment/payment-list/payment-list.component';
import { ReviewFormComponent } from './components/data/review/review-form/review-form.component';
import { ReviewListComponent } from './components/data/review/review-list/review-list.component';
import { TransactionFormComponent } from './components/data/transaction/transaction-form/transaction-form.component';
import { TransactionListComponent } from './components/data/transaction/transaction-list/transaction-list.component';
import { ApprovableFormComponent } from './components/super/approvable/approvable-form/approvable-form.component';
import { ApprovableListComponent } from './components/super/approvable/approvable-list/approvable-list.component';
import { AuditAbleFormComponent } from './components/super/audit-able/audit-able-form/audit-able-form.component';
import { AuditAbleListComponent } from './components/super/audit-able/audit-able-list/audit-able-list.component';
import { BaseFormComponent } from './components/super/base/base-form/base-form.component';
import { BaseListComponent } from './components/super/base/base-list/base-list.component';
import { DashboardRoutingModule } from './dashboard-routing.module';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PermissionFormComponent } from './components/auth/permission/permission-form/permission-form.component';
import { PermissionListComponent } from './components/auth/permission/permission-list/permission-list.component';
import { UserFormComponent } from './components/auth/user/user-form/user-form.component';
import { UserListComponent } from './components/auth/user/user-list/user-list.component';
import { PurchaseFormComponent } from './components/data/purchase/purchase-form/purchase-form.component';
import { PurchaseListComponent } from './components/data/purchase/purchase-list/purchase-list.component';
import { AboutUsComponent } from './components/layout/about-us/about-us.component';
import { DashboardComponent } from './components/layout/dashboard/dashboard.component';
import { InventoryReportComponent } from './components/layout/inventory-report/inventory-report.component';
import { SalesReportComponent } from './components/layout/sales-report/sales-report.component';
import { LoginComponent } from './components/login-page/login/login.component';
import { AuthService } from './services/auth/auth.service';
import { CrudService } from './services/crud.service';
import { CartFormComponent } from './components/data/cart/cart-form/cart-form.component';
import { CartListComponent } from './components/data/cart/cart-list/cart-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    RoleFormComponent,
    RoleListComponent,
    CustomerFormComponent,
    CustomerListComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    ProductFormComponent,
    ProductListComponent,
    SupplierFormComponent,
    SupplierListComponent,
    InventoryFormComponent,
    InventoryListComponent,
    OrderFormComponent,
    OrderListComponent,
    ApprovableFormComponent,
    ApprovableListComponent,
    AuditAbleFormComponent,
    AuditAbleListComponent,
    BaseFormComponent,
    BaseListComponent,
    CategoryFormComponent,
    CategoryListComponent,
    DiscountFormComponent,
    DiscountListComponent,
    OrderItemFormComponent,
    OrderItemListComponent,
    PaymentFormComponent,
    PaymentListComponent,
    ReviewFormComponent,
    ReviewListComponent,
    TransactionFormComponent,
    TransactionListComponent,
    BlankPageComponent,
    LoginComponent,
    PermissionFormComponent,
    PermissionListComponent,
    UserFormComponent,
    UserListComponent,
    AboutUsComponent,
    SalesReportComponent,
    InventoryReportComponent,
    PurchaseFormComponent,
    PurchaseListComponent,
    CartFormComponent,
    CartListComponent,

  ],
  imports: [
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
  exports: [
    DashboardRoutingModule
  ],
  providers: [AuthService, CrudService]
})
export class DashboardModule { }
