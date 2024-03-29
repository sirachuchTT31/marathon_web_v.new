import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { LocalStorageService } from 'src/app/index/services/local-storage.service';
import { TaskApproverService } from 'src/app/index/services/task-approver.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-approver-running',
  templateUrl: './approver-running.component.html',
  styleUrls: ['./approver-running.component.scss']
})
export class ApproverRunningComponent {
  constructor(private taskService: TaskApproverService, private spinner: NgxSpinnerService, private localStorageService: LocalStorageService) { }
  register_event_by_approver: any
  admin_id: any
  ngOnInit(): void {
    this.getRegbyApprover()
    //SET ADMIN ID
    this.admin_id = this.localStorageService?.getId()
  }
  updatestatusapprover(trans_id: string, reg_event_id: string) {
    Swal.fire({
      title: "คุณต้องการอนุมัติใช่หรือไม่",
      text: "ถ้าบันทึกจะไม่สามารถกลับมาแก้ไขได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึก",
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        let param = {
          trans_id: trans_id,
          status: 'Approver',
          admin_id: this.admin_id,
          reason: '',
          reg_event_id: reg_event_id
        }
        this.taskService.updateRegistereventbyapprover(param).subscribe((rs) => {
          if (rs?.status == true) {
            Swal.fire({
              showCloseButton: true,
              showConfirmButton: false,
              icon: "success",
              // title: rs?.status_code,
              timer: 3000,
              text: rs?.message,
            });
            this.getRegbyApprover()
          }
          else {
            this.spinner.hide()
            Swal.fire({
              showCloseButton: true,
              showConfirmButton: false,
              icon: "error",
              // title: rs?.status_code,
              text: rs?.message,
            });
          }
        })
      }
    });

  }
  updatestatusreject(trans_id: string, reg_event_id: string) {
    let reason: string = ""
    Swal.fire({
      title: "คุณต้องการอนุมัติใช่หรือไม่",
      text: "ถ้าบันทึกจะไม่สามารถกลับมาแก้ไขได้",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "บันทึก",
      cancelButtonText: 'ยกเลิก',
      input: "textarea",
      inputPlaceholder: "ระบุเหตุผล",
      inputValue: reason,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            reason = value
            resolve()
          } else {
            resolve('กรุณาระบุเหตุผล')
          }
        })
      }
    }).then((result) => {
      if (result.isConfirmed) {
        let param = {
          trans_id: trans_id,
          status: 'Reject',
          admin_id: this.admin_id,
          reason: reason,
          reg_event_id: reg_event_id
        }
        this.taskService.updateRegistereventbyapprover(param).subscribe((rs) => {
          if (rs?.status == true) {
            Swal.fire({
              showCloseButton: true,
              showConfirmButton: false,
              icon: "success",
              // title: rs?.status_code,
              timer: 3000,
              text: rs?.message,
            });
            this.getRegbyApprover()
          }
          else {
            this.spinner.hide()
            Swal.fire({
              showCloseButton: true,
              showConfirmButton: false,
              icon: "error",
              // title: rs?.status_code,
              text: rs?.message,
            });
          }
        })
      }
    });

  }
  getRegbyApprover() {
    this.taskService.getRegistereventbyapprover().subscribe((rs) => {
      if (rs?.status == true) {
        this.register_event_by_approver = rs.result
      }
      else {

      }
    })
  }
}
